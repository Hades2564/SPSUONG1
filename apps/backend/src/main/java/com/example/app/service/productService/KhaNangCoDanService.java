package com.example.app.service.productService;

import com.example.app.entity.KhaNangCoDan;
import com.example.app.repository.ProduRepository.KhaNangCoDanRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class KhaNangCoDanService {
    @Autowired
    KhaNangCoDanRepository Repository;

    public List<KhaNangCoDan> getAll() {
        return Repository.findAll();
    }

    public Optional<KhaNangCoDan> getById(Integer id) {
        return Repository.findById(id);
    }

    public KhaNangCoDan create(KhaNangCoDan request) {
        KhaNangCoDan loaiHoaTIet = new KhaNangCoDan();
        BeanUtils.copyProperties(request, loaiHoaTIet); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(loaiHoaTIet);
        return Repository.save(loaiHoaTIet);
    }

    public KhaNangCoDan update(Integer id, KhaNangCoDan request) {
        Optional<KhaNangCoDan> optional = Repository.findById(id);
        if (optional.isPresent()) {
            KhaNangCoDan existing = optional.get();
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
