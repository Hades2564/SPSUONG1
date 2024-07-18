package com.example.app.service.productService;

import com.example.app.entity.LoaiHoaTIet;
import com.example.app.repository.ProduRepository.LoaiHoaTietRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoaiHoaTietService {
    @Autowired
    LoaiHoaTietRepository LoaiHoaTietRepository;

    public List<LoaiHoaTIet> getAll() {
        return LoaiHoaTietRepository.findAll();
    }

    public Optional<LoaiHoaTIet> getById(Integer id) {
        return LoaiHoaTietRepository.findById(id);
    }

    public LoaiHoaTIet create(LoaiHoaTIet request) {
        LoaiHoaTIet loaiHoaTIet = new LoaiHoaTIet();
        BeanUtils.copyProperties(request, loaiHoaTIet); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(loaiHoaTIet);
        return LoaiHoaTietRepository.save(loaiHoaTIet);
    }

    public LoaiHoaTIet update(Integer id, LoaiHoaTIet request) {
        Optional<LoaiHoaTIet> optional = LoaiHoaTietRepository.findById(id);
        if (optional.isPresent()) {
            LoaiHoaTIet existing = optional.get();
            // Update existingStaff with properties from request
            BeanUtils.copyProperties(request, existing, "id"); // Exclude copying ID

            return LoaiHoaTietRepository.save(existing);
        } else {
            throw new RuntimeException("Staff with id " + id + " not found");
        }
    }

    public void delete(Integer id) {
        LoaiHoaTietRepository.deleteById(id);
    }
}
