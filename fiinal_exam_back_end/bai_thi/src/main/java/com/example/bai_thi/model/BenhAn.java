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
}
