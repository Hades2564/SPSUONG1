package com.example.app.repository.ProduRepository;

import com.example.app.entity.KhaNangCoDan;
import com.example.app.entity.LoaiHoaTIet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LoaiHoaTietRepository extends JpaRepository<LoaiHoaTIet,Integer> {
    Optional<LoaiHoaTIet> findById(int id);

}
