package com.example.app.repository.ProduRepository;

import com.example.app.entity.KhaNangCoDan;
import com.example.app.entity.MoTaHoaTiet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MoTaHoaTietRepository extends JpaRepository< MoTaHoaTiet,Integer> {
    Optional<MoTaHoaTiet> findById(int id);

}
