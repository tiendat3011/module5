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
}
