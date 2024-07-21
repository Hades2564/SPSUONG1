package com.example.app.repository.ProduRepository;

import com.example.app.entity.ChatLieu;
import com.example.app.entity.DoDayCuaVai;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DoDayCuVaiRepository extends JpaRepository<DoDayCuaVai,Integer> {
    Optional<DoDayCuaVai> findById(int id);

}
