package com.example.app.repository.ProduRepository;

import com.example.app.entity.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SanphamRepository extends JpaRepository<SanPham,Integer> {
}
