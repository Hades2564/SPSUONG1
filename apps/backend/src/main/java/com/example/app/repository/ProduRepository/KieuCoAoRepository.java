package com.example.app.repository.ProduRepository;

import com.example.app.entity.KhaNangCoDan;
import com.example.app.entity.KieuCoAo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KieuCoAoRepository extends JpaRepository<KieuCoAo,Integer> {
    Optional<KieuCoAo> findById(int id);

}
