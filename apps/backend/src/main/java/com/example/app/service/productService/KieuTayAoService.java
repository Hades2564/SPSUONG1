package com.example.app.service.productService;

import com.example.app.entity.KieuTaiAo;
import com.example.app.entity.NuocSanXuat;
import com.example.app.repository.ProduRepository.KieuTayAoRepository;
import com.example.app.repository.ProduRepository.NuocSanXuatRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class KieuTayAoService {
    @Autowired
    KieuTayAoRepository Repository;

    public List<KieuTaiAo> getAll() {
        return Repository.findAll();
    }

    public Optional<KieuTaiAo> getById(Integer id) {
        return Repository.findById(id);
    }

    public KieuTaiAo create(KieuTaiAo request) {
        KieuTaiAo loaiHoaTIet = new KieuTaiAo();
        BeanUtils.copyProperties(request, loaiHoaTIet); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(loaiHoaTIet);
        return Repository.save(loaiHoaTIet);
    }

    public KieuTaiAo update(Integer id, KieuTaiAo request) {
        Optional<KieuTaiAo> optional = Repository.findById(id);
        if (optional.isPresent()) {
            KieuTaiAo existing = optional.get();
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
