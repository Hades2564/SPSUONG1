package com.example.app.service.productService;

import com.example.app.entity.KieuCoAo;
import com.example.app.entity.NuocSanXuat;
import com.example.app.repository.ProduRepository.KieuCoAoRepository;
import com.example.app.repository.ProduRepository.NuocSanXuatRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class KieuCoAoService {
    @Autowired
    KieuCoAoRepository Repository;

    public List<KieuCoAo> getAll() {
        return Repository.findAll();
    }

    public Optional<KieuCoAo> getById(Integer id) {
        return Repository.findById(id);
    }

    public KieuCoAo create(KieuCoAo request) {
        KieuCoAo loaiHoaTIet = new KieuCoAo();
        BeanUtils.copyProperties(request, loaiHoaTIet); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(loaiHoaTIet);
        return Repository.save(loaiHoaTIet);
    }

    public KieuCoAo update(Integer id, KieuCoAo request) {
        Optional<KieuCoAo> optional = Repository.findById(id);
        if (optional.isPresent()) {
            KieuCoAo existing = optional.get();
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
