package com.example.app.repository.ProduRepository;

import com.example.app.entity.KichThuoc;
import com.example.app.entity.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KichThuocRepository extends JpaRepository<KichThuoc,Integer> {
    Optional<KichThuoc> findByTen(String kichThuoc);
}
