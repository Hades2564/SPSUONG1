package com.example.app.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductDetailDto {
    @NotNull
    @NotBlank
    private String ma;
    @NotNull
    @NotBlank
    private double gia;
    @NotNull
    @NotBlank
    private long soLuong;
    @NotNull
    private String sanPham;
    @NotNull
    private String mauSac;
    @NotNull
    private String KichThuoc;
    @NotNull
    private String loaiHoaTIet;
    @NotNull
    private String moTaHoaTiet;
    @NotNull
    private String nuocSanXuat;
    @NotNull
    private String thuongHieu;
    @NotNull
    private String kieuCoAo;
    @NotNull
    private String kieuTaiAo;
    @NotNull
    private String kieuDangAo;
    @NotNull
    private String chatLieu;
    @NotNull
    private String doDayCuaVai;
    @NotNull
    private String khaNangCoDan;

}