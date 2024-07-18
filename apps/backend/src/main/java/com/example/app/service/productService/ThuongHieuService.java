package com.example.app.service.productService;

import com.example.app.entity.ThuongHieu;
import com.example.app.repository.ProduRepository.ThuongHieuRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ThuongHieuService {
    @Autowired
    ThuongHieuRepository Repository;

    public List<ThuongHieu> getAll() {
        return Repository.findAll();
    }

    public Optional<ThuongHieu> getById(Integer id) {
        return Repository.findById(id);
    }

    public ThuongHieu create(ThuongHieu request) {
        ThuongHieu loaiHoaTIet = new ThuongHieu();
        BeanUtils.copyProperties(request, loaiHoaTIet); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(loaiHoaTIet);
        return Repository.save(loaiHoaTIet);
    }

    public ThuongHieu update(Integer id, ThuongHieu request) {
        Optional<ThuongHieu> optional = Repository.findById(id);
        if (optional.isPresent()) {
            ThuongHieu existing = optional.get();
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
