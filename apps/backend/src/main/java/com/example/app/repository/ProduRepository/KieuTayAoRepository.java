package com.example.app.repository.ProduRepository;

import com.example.app.entity.KhaNangCoDan;
import com.example.app.entity.KieuTaiAo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KieuTayAoRepository extends JpaRepository<KieuTaiAo,Integer> {
    Optional<KieuTaiAo> findById(int id);

}
