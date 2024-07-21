package com.example.app.repository.ProduRepository;

import com.example.app.entity.SanPham;
import com.example.app.entity.ThuongHieu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ThuongHieuRepository extends JpaRepository<ThuongHieu, Integer> {
    Optional<ThuongHieu> findById(int id);

}
