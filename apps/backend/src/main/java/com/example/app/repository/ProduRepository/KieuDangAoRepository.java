package com.example.app.repository.ProduRepository;

import com.example.app.entity.KhaNangCoDan;
import com.example.app.entity.KieuDangAo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KieuDangAoRepository extends JpaRepository<KieuDangAo,Integer> {
    Optional<KieuDangAo> findById(int id);

}
