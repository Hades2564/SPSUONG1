package com.example.app.service.productService;
import com.example.app.entity.NuocSanXuat;
import com.example.app.repository.ProduRepository.NuocSanXuatRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class NuocSanXuatService {
    @Autowired
    NuocSanXuatRepository Repository;

    public List<NuocSanXuat> getAll() {
        return Repository.findAll();
    }

    public Optional<NuocSanXuat> getById(Integer id) {
        return Repository.findById(id);
    }

    public NuocSanXuat create(NuocSanXuat request) {
        NuocSanXuat loaiHoaTIet = new NuocSanXuat();
        BeanUtils.copyProperties(request, loaiHoaTIet); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(loaiHoaTIet);
        return Repository.save(loaiHoaTIet);
    }

    public NuocSanXuat update(Integer id, NuocSanXuat request) {
        Optional<NuocSanXuat> optional = Repository.findById(id);
        if (optional.isPresent()) {
            NuocSanXuat existing = optional.get();
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
