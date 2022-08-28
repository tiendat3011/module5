package com.example.bai_thi.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class BenhAn {
    @Id
    @GeneratedValue
    private Integer id;
    private String code;

    @OneToMany(mappedBy = "benhAn")
    @JsonBackReference
    private List<BenhNhan> benhNhans;

    public BenhAn() {
    }

    public BenhAn(Integer id) {
        this.id = id;
    }

    public BenhAn(Integer id, String code, List<BenhNhan> benhNhans) {
        this.id = id;
        this.code = code;
        this.benhNhans = benhNhans;
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

    public List<BenhNhan> getBenhNhans() {
        return benhNhans;
    }

    public void setBenhNhans(List<BenhNhan> benhNhans) {
        this.benhNhans = benhNhans;
    }
}
