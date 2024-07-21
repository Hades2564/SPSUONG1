package com.example.app.repository.ProduRepository;

import com.example.app.entity.MauSac;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MauSacRepository extends JpaRepository<MauSac,Integer> {
    Optional<MauSac> findByTen(String mauSac);

}
