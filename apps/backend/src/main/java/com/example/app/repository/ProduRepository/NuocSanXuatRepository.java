package com.example.app.repository.ProduRepository;

import com.example.app.entity.KhaNangCoDan;
import com.example.app.entity.NuocSanXuat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NuocSanXuatRepository extends JpaRepository<NuocSanXuat, Integer> {
    Optional<NuocSanXuat> findById(int id);

}
