package com.example.app.repository.ProduRepository;

import com.example.app.entity.DoDayCuaVai;
import com.example.app.entity.KhaNangCoDan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KhaNangCoDanRepository extends JpaRepository<KhaNangCoDan, Integer> {
    Optional<KhaNangCoDan> findById(int id);

}
