"use client"

import React from 'react'
import { BsBell, BsCloudDrizzleFill, BsHouseDoor, BsHouseDoorFill, BsPersonCircle } from "react-icons/bs"
import { FiCalendar, FiMapPin } from "react-icons/fi"
import Image from 'next/image'
import Link from 'next/link'

const Page=()=>{
    return (
        <>
            <nav className="menubar navbar fixed-bottom bg-white border-top py-0">
                <div className="container">
                    <ul className="nav w-100 d-flex justify-content-between">
                        <li className="nav-item active">
                            <Link href="/" className="nav-link d-flex flex-column align-items-center">
                                <BsHouseDoorFill/>
                                <span>Beranda</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex flex-column align-items-center" href="#">
                                <BsBell/>
                                <span>Notifikasi</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex flex-column align-items-center" href="#">
                                <BsPersonCircle/>
                                <span>Profile</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="block-header-homepage mb-4">
                <div className='container px-0'>
                    <div className='d-flex flex-column bg-green-1 rounded-bottom-5'>
                        <div className='d-flex p-4 justify-content-between text-white'>
                            <span className='fs-20px fw-semibold'>Halo Boi</span>
                            <div className='d-flex align-items-center'>
                                <img src='/images/star.png' width={20} alt=""/>
                                <span className='ms-1'>300 POINT</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center bg-green-2 p-4 mx-4 mb-4 rounded-4 text-white">
                            <div className='d-flex flex-column'>
                                <div className='d-flex align-items-center'>
                                    <FiMapPin/>
                                    <span className='ms-1 fw-medium'>Sleman, Yogyakarta</span>
                                </div>
                                <span className='fs-14px text-white-50'>Rabu, 15 Juni 2022 09:41</span>
                            </div>
                            <div className='d-flex flex-column align-items-center ms-3'>
                                <div className='d-flex align-items-center fs-20px'>
                                    <BsCloudDrizzleFill/>
                                    <span className='ms-2 fw-semibold'>29°</span>
                                </div>
                                <span className='fs-14px'>Hujan Ringan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='block-link-homepage mb-4'>
                <div className='container'>
                    <div className='row w-100'>
                        <div className='col-3'>
                            <a href="" className='d-flex flex-column align-items-center link-dark text-decoration-none p-3'>
                                <img src="/images/plus.png" style={{maxWidth:"70px", maxHeight:"70px"}} alt=""/>
                                <span className='text-center'>Lahan</span>
                            </a>
                        </div>
                        <div className='col-3'>
                            <a href="" className='d-flex flex-column align-items-center link-dark text-decoration-none p-3'>
                            <img src="/images/bug.png" style={{maxWidth:"70px", maxHeight:"70px"}} alt=""/>
                                <span className='text-center'>Identifikasi Hama</span>
                            </a>
                        </div>
                        <div className='col-3'>
                            <a href="" className='d-flex flex-column align-items-center link-dark text-decoration-none p-3'>
                            <img src="/images/hujan.png" style={{maxWidth:"70px", maxHeight:"70px"}} alt=""/>
                                <span className='text-center'>Prediksi Iklim</span>
                            </a>
                        </div>
                        <div className='col-3'>
                            <a href="" className='d-flex flex-column align-items-center link-dark text-decoration-none p-3'>
                            <img src="/images/people.png" style={{maxWidth:"70px", maxHeight:"70px"}} alt=""/>
                                <span className='text-center'>Forum</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block-news-homepage mb-4'>
                <div className='container'>
                    <div className='d-flex w-100 justify-content-between align-items-center mb-2'>
                        <h4 className='fs-20px fw-semibold mb-0'>Artikel</h4>
                        <a href='#' className='btn btn-success btn-sm rounded-3'>Lihat Semua</a>
                    </div>
                    <div className='row flex-row flex-nowrap overflow-x-auto no-scrollbar'>
                        <div className='col-9'>
                            <div className="card  border-0">
                                <img src="/images/post-1.jpg" className='rounded-top-4' style={{maxWidth:"100%", maxHeight:"100%"}} alt=""/>
                                <div className="card-body">
                                    <a href="" className="link-dark text-decoration-none fs-18px">Menghilangkan Hama Wereng secara permanen</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className="card  border-0">
                                <img src="/images/post-2.jpg" className='rounded-top-4' style={{maxWidth:"100%", maxHeight:"100%"}} alt=""/>
                                <div className="card-body">
                                    <a href="" className="link-dark text-decoration-none fs-18px">Menghilangkan Hama Wereng secara permanen</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block-tanam mb-4'>
                <div className='container'>
                    <div className='d-flex w-100 justify-content-between align-items-center mb-2'>
                        <h4 className='fs-20px fw-semibold mb-0'>Lahan Anda</h4>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-12'>
                            <Link href="/analisa" className="row align-items-center text-decoration-none text-dark g-0 mb-4">
                                <div className="col-4">
                                    <div className='d-flex flex-column align-items-center'>
                                        <img src="/images/rice.png" style={{maxWidth:"90px", maxHeight:"90px"}} alt="..."/>
                                        <span className='badge bg-success fs-14px mt-2'>HST 30</span>
                                    </div>
                                </div>
                                <div className="col-8 d-flex align-items-center justify-content-between">
                                    <div className='d-flex flex-column'>
                                        <h5 className='fs-18px fw-semibold'><span className='text-success'>Padi</span> &nbsp; Raja Lele</h5>
                                        <div className='d-flex flex-column fs-14px text-body-tertiary'>
                                            <span className='text-truncate'>Ditanam 23 Januari 2021</span>
                                            <span className='text-truncate'><FiCalendar/> &nbsp; 1 Bulan</span>
                                            <span className='text-truncate'><FiMapPin/> &nbsp; Sawah Cangkringan</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column align-items-end ms-3'>
                                        <div className='d-flex align-items-center justify-content-end fs-18px'>
                                            <BsCloudDrizzleFill/>
                                            <span className='ms-2 fw-semibold'>29°</span>
                                        </div>
                                        <span className='fs-14px text-body-tertiary text-end'>Hujan Ringan</span>
                                        <span className='badge bg-warning text-dark fs-13px mt-3'>1 hektar</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-12'>
                            <Link href="/analisa" className="row align-items-center text-decoration-none text-dark g-0 mb-4">
                                <div className="col-4">
                                    <div className='d-flex flex-column align-items-center'>
                                        <img src="/images/rice.png" style={{maxWidth:"90px", maxHeight:"90px"}} alt="..."/>
                                        <span className='badge bg-success fs-14px mt-2'>HST 2</span>
                                    </div>
                                </div>
                                <div className="col-8 d-flex align-items-center justify-content-between">
                                    <div className='d-flex flex-column'>
                                        <h5 className='fs-18px fw-semibold'><span className='text-success'>Padi</span> &nbsp; IR64</h5>
                                        <div className='d-flex flex-column fs-14px text-body-tertiary'>
                                            <span className='text-truncate'>Ditanam 15-12-2021</span>
                                            <span className='text-truncate'><FiCalendar/> &nbsp; 4 Bulan 20 Hari</span>
                                            <span className='text-truncate'><FiMapPin/> &nbsp; Sawah Cangkringan</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column align-items-end ms-3'>
                                        <div className='d-flex align-items-center justify-content-end fs-18px'>
                                            <BsCloudDrizzleFill/>
                                            <span className='ms-2 fw-semibold'>29°</span>
                                        </div>
                                        <span className='fs-14px text-body-tertiary text-end'>Hujan Ringan</span>
                                        <span className='badge bg-warning text-dark fs-13px mt-3'>1 hektar</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{height:"70px"}}></div>
        </>
    )
}

export default Page