package com.example.app.service.productService;

import com.example.app.entity.ChatLieu;
import com.example.app.entity.NuocSanXuat;
import com.example.app.repository.ProduRepository.ChatLieuRepository;
import com.example.app.repository.ProduRepository.NuocSanXuatRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ChatLieuService {
    @Autowired
    ChatLieuRepository Repository;

    public List<ChatLieu> getAll() {
        return Repository.findAll();
    }

    public Optional<ChatLieu> getById(Integer id) {
        return Repository.findById(id);
    }

    public ChatLieu create(ChatLieu request) {
        ChatLieu loaiHoaTIet = new ChatLieu();
        BeanUtils.copyProperties(request, loaiHoaTIet); // Sử dụng BeanUtils để sao chép thuộc tính từ request vào staff
        System.out.println(loaiHoaTIet);
        return Repository.save(loaiHoaTIet);
    }

    public ChatLieu update(Integer id, ChatLieu request) {
        Optional<ChatLieu> optional = Repository.findById(id);
        if (optional.isPresent()) {
            ChatLieu existing = optional.get();
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
