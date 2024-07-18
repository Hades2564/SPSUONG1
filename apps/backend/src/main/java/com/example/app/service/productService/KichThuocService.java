package com.example.app.service.productService;

import com.example.app.entity.KichThuoc;
import com.example.app.entity.MauSac;
import com.example.app.repository.ProduRepository.KichThuocRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class KichThuocService {
    @Autowired
    KichThuocRepository kichThuocRepository;

    public List<KichThuoc> getAll() {
        return kichThuocRepository.findAll();
    }

    public Optional<KichThuoc> getStaffById(Integer id) {
        return kichThuocRepository.findById(id);
    }

    public KichThuoc createStaff(KichThuoc request) {
        KichThuoc staff = new KichThuoc();
        BeanUtils.copyProperties(request, staff); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(staff);
        return kichThuocRepository.save(staff);
    }

    public KichThuoc updateStaff(Integer id, KichThuoc request) {
        Optional<KichThuoc> optionalStaff = kichThuocRepository.findById(id);
        if (optionalStaff.isPresent()) {
            KichThuoc existingStaff = optionalStaff.get();
            // Update existingStaff with properties from request
            BeanUtils.copyProperties(request, existingStaff, "id"); // Exclude copying ID

            return kichThuocRepository.save(existingStaff);
        } else {
            throw new RuntimeException("Staff with id " + id + " not found");
        }
    }

    public void deleteStaff(Integer id) {
        kichThuocRepository.deleteById(id);
    }
}
