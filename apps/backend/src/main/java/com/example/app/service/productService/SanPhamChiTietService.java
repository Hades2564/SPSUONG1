package com.example.app.service.productService;

import com.example.app.entity.SanPham;
import com.example.app.entity.SanPhamChiTiet;
import com.example.app.repository.ProduRepository.SanPhamChiTietRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SanPhamChiTietService {
    @Autowired
    SanPhamChiTietRepository Repository;

    public List<SanPhamChiTiet> getAll() {
        return Repository.findAll();
    }

    public Optional<SanPhamChiTiet> getById(Integer id) {
        return Repository.findById(id);
    }

    public SanPhamChiTiet create(SanPhamChiTiet request) {
        SanPhamChiTiet loaiHoaTIet = new SanPhamChiTiet();
        BeanUtils.copyProperties(request, loaiHoaTIet); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(loaiHoaTIet);
        return Repository.save(loaiHoaTIet);
    }

    public SanPhamChiTiet update(Integer id, SanPhamChiTiet request) {
        Optional<SanPhamChiTiet> optional = Repository.findById(id);
        if (optional.isPresent()) {
            SanPhamChiTiet existing = optional.get();
            // Update existingStaff with properties from request
            BeanUtils.copyProperties(request, existing, "id"); // Exclude copying ID

            return Repository.save(existing);
        } else {
            throw new RuntimeException("Staff with id " + id + " not found");
        }
    }

    public void delete(Integer id) {
        Repository.deleteById(id);
    }


}
