package com.example.app.service.productService;

import com.example.app.entity.LoaiHoaTIet;
import com.example.app.entity.MoTaHoaTiet;
import com.example.app.repository.ProduRepository.LoaiHoaTietRepository;
import com.example.app.repository.ProduRepository.MoTaHoaTietRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MoTaHoaTietService {
    @Autowired
    MoTaHoaTietRepository moTaHoaTietRepository;

    public List<MoTaHoaTiet> getAll() {
        return moTaHoaTietRepository.findAll();
    }

    public Optional<MoTaHoaTiet> getById(Integer id) {
        return moTaHoaTietRepository.findById(id);
    }

    public MoTaHoaTiet create(MoTaHoaTiet request) {
        MoTaHoaTiet loaiHoaTIet = new MoTaHoaTiet();
        BeanUtils.copyProperties(request, loaiHoaTIet); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(loaiHoaTIet);
        return moTaHoaTietRepository.save(loaiHoaTIet);
    }

    public MoTaHoaTiet update(Integer id, MoTaHoaTiet request) {
        Optional<MoTaHoaTiet> optional = moTaHoaTietRepository.findById(id);
        if (optional.isPresent()) {
            MoTaHoaTiet existing = optional.get();
            // Update existingStaff with properties from request
            BeanUtils.copyProperties(request, existing, "id"); // Exclude copying ID

            return moTaHoaTietRepository.save(existing);
        } else {
            throw new RuntimeException("Staff with id " + id + " not found");
        }
    }

    public void delete(Integer id) {
        moTaHoaTietRepository.deleteById(id);
    }
}
