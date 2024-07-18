package com.example.app.service.productService;

import com.example.app.entity.DoDayCuaVai;
import com.example.app.repository.ProduRepository.DoDayCuVaiRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class DoDayCuaVaiService {
    @Autowired
    DoDayCuVaiRepository Repository;

    public List<DoDayCuaVai> getAll() {
        return Repository.findAll();
    }

    public Optional<DoDayCuaVai> getById(Integer id) {
        return Repository.findById(id);
    }

    public DoDayCuaVai create(DoDayCuaVai request) {
        DoDayCuaVai loaiHoaTIet = new DoDayCuaVai();
        BeanUtils.copyProperties(request, loaiHoaTIet); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(loaiHoaTIet);
        return Repository.save(loaiHoaTIet);
    }

    public DoDayCuaVai update(Integer id, DoDayCuaVai request) {
        Optional<DoDayCuaVai> optional = Repository.findById(id);
        if (optional.isPresent()) {
            DoDayCuaVai existing = optional.get();
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
