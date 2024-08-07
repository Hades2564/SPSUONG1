package com.example.app.repository.ProduRepository;

import com.example.app.entity.MauSac;
import com.example.app.entity.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SanphamRepository extends JpaRepository<SanPham,Integer> {
    Optional<SanPham> findByTen(String sanPham);

}
