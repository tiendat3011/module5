package com.example.bai_thi.controller;

import com.example.bai_thi.service.IBenhAnService;
import com.example.bai_thi.service.IBenhNhanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

//@Request
@RestController
@CrossOrigin("*")
public class BaiThi {
    @Autowired
    private IBenhAnService iBenhAnService;
    @Autowired
    private IBenhNhanService iBenhNhanService;
}