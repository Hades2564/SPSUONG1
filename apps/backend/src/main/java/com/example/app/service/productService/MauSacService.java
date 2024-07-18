package com.example.app.service.productService;

import com.example.app.entity.MauSac;
import com.example.app.repository.ProduRepository.MauSacRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class MauSacService {
    @Autowired
    MauSacRepository mauSacRepository;

    public List<MauSac> getAll() {
        return mauSacRepository.findAll();
    }

    public Optional<MauSac> getStaffById(Integer id) {
        return mauSacRepository.findById(id);
    }

    public MauSac createStaff(MauSac request) {
        MauSac staff = new MauSac();
        BeanUtils.copyProperties(request, staff); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(staff);
        return mauSacRepository.save(staff);
    }

    public MauSac updateStaff(Integer id, MauSac request) {
        Optional<MauSac> optionalStaff = mauSacRepository.findById(id);
        if (optionalStaff.isPresent()) {
            MauSac existingStaff = optionalStaff.get();
            // Update existingStaff with properties from request
            BeanUtils.copyProperties(request, existingStaff, "id"); // Exclude copying ID

            return mauSacRepository.save(existingStaff);
        } else {
            throw new RuntimeException("Staff with id " + id + " not found");
        }
    }

    public void deleteStaff(Integer id) {
        mauSacRepository.deleteById(id);
    }
}
