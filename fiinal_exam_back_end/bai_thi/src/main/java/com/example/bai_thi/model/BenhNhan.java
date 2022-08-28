package com.example.bai_thi.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class BenhNhan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String code;
    private String name;
    private String dateStart;
    private String dateEnd;
    private String lyDo;
    private String phuongPhap;
    private String bacSi;
    @ManyToOne
    @JoinColumn(name = "id_benh_an", referencedColumnName = "id")
    private BenhAn benhAn;

    public BenhNhan() {
    }

    public BenhNhan(Integer id, String code, String name, String dateStart, String dateEnd, String lyDo, String phuongPhap, String bacSi, BenhAn benhAn) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.lyDo = lyDo;
        this.phuongPhap = phuongPhap;
        this.bacSi = bacSi;
        this.benhAn = benhAn;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateStart() {
        return dateStart;
    }

    public void setDateStart(String dateStart) {
        this.dateStart = dateStart;
    }

    public String getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(String dateEnd) {
        this.dateEnd = dateEnd;
    }

    public String getLyDo() {
        return lyDo;
    }

    public void setLyDo(String lyDo) {
        this.lyDo = lyDo;
    }

    public String getPhuongPhap() {
        return phuongPhap;
    }

    public void setPhuongPhap(String phuongPhap) {
        this.phuongPhap = phuongPhap;
    }

    public String getBacSi() {
        return bacSi;
    }

    public void setBacSi(String bacSi) {
        this.bacSi = bacSi;
    }

    public BenhAn getBenhAn() {
        return benhAn;
    }

    public void setBenhAn(BenhAn benhAn) {
        this.benhAn = benhAn;
    }
}
