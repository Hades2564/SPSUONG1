package com.example.app.service.productService;

import com.example.app.entity.SanPham;
import com.example.app.repository.ProduRepository.SanphamRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SanPhamService {
    @Autowired
    SanphamRepository sanphamRepository;

    public List<SanPham> getAll() {
        return sanphamRepository.findAll();
    }

    public Optional<SanPham> getStaffById(Integer id) {
        return sanphamRepository.findById(id);
    }

    public SanPham createStaff(SanPham request) {
        SanPham staff = new SanPham();
        BeanUtils.copyProperties(request, staff); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(staff);
        return sanphamRepository.save(staff);
    }

    public SanPham updateStaff(Integer id, SanPham request) {
        Optional<SanPham> optionalStaff = sanphamRepository.findById(id);
        if (optionalStaff.isPresent()) {
            SanPham existingStaff = optionalStaff.get();
            // Update existingStaff with properties from request
            BeanUtils.copyProperties(request, existingStaff, "id"); // Exclude copying ID

            return sanphamRepository.save(existingStaff);
        } else {
            throw new RuntimeException("Staff with id " + id + " not found");
        }
    }

    public void deleteStaff(Integer id) {
        sanphamRepository.deleteById(id);
    }
}
