package com.example.app.repository.ProduRepository;

import com.example.app.entity.ChatLieu;
import com.example.app.entity.KichThuoc;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChatLieuRepository extends JpaRepository<ChatLieu,Integer> {
    Optional<ChatLieu> findById(int id);

}
