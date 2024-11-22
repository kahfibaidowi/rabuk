"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsBell, BsCloudDrizzleFill, BsHouseDoor, BsHouseDoorFill, BsPersonCircle } from "react-icons/bs"
import { FiArrowLeft, FiChevronLeft, FiDownload, FiShare2 } from 'react-icons/fi'

const Page=()=>{
    const router=useRouter()

    return (
        <>
            <nav className='menubar navbar fixed-top bg-white border-bottom-0 py-0'>
                <div className='container'>
                    <button type='button' className='btn btn-link link-dark py-1 ps-0 fs-25px' onClick={()=>router.back()}>
                        <FiChevronLeft/>
                    </button>
                </div>
            </nav>

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

            <div className='block-content' style={{marginTop:"50px"}}>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-between py-2 mb-3'>
                        <h2 className='fw-bold fs-22px'>Hasil Analisa</h2>
                        <div className='d-flex ms-2'>
                            <button className='d-flex flex-column align-items-center btn btn-link link-dark text-decoration-none fs-22px me-1'>
                                <FiShare2/>
                                <span className='fs-13px'>Bagikan</span>
                            </button>
                            <button className='d-flex flex-column align-items-center btn btn-link link-dark text-decoration-none fs-22px'>
                                <FiDownload/>
                                <span className='fs-13px'>Unduh</span>
                            </button>
                        </div>
                    </div>
                    <div className='d-flex flex-column mb-3'>
                        <span className='fw-bold mb-2 fs-16px'>Informasi Lahan</span>
                        <span className='mb-1'>Nama Lahan : Pamali 3</span>
                        <span className='mb-1'>Tanaman : Bawang Merah - Umbi</span>
                        <span className='mb-1'>Luas Lahan : 5000 Meter</span>
                        <span className='mb-1'>Tanggal Pengecekan : Rabu, 29 Juni 2022</span>
                    </div>
                    <div className='mb-4'>
                        <span className='fw-semibold'>Berdasarkan hasil analisa Jinawi, Lahan ini membutuhkan :</span>
                    </div>
                    <div className='mb-4'>
                        <h5 className='fw-bold fs-16px mb-4'>Pupuk Utama</h5>
                        <div className='d-flex align-items-center mb-3'>
                            <div className='w-50px d-flex flex-column align-items-center px-2 py-1 bg-primary text-white rounded-3'>
                                <span className='fs-13px'>Jun</span>
                                <span className='fs-22px fw-bold'>29</span>
                            </div>
                            <span className='ms-3 fw-bold'>Pemupukan HST 10</span>
                        </div>
                        <table className='table table-borderless table-sm'>
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th width="120">Jumlah</th>
                                    <th width="150">Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Phonska</td>
                                    <td>0 KG</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr>
                                    <td>Urea</td>
                                    <td>37 KG</td>
                                    <td>Rp. 88,800</td>
                                </tr>
                                <tr>
                                    <td>SP-36</td>
                                    <td>29 KG</td>
                                    <td>Rp. 145,000</td>
                                </tr>
                                <tr>
                                    <td>KCL</td>
                                    <td>0 KG</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr>
                                    <td>Dolomit</td>
                                    <td>0 KG</td>
                                    <td>Rp. 0</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={3} className='py-0'>
                                        <hr style={{background:"#232323", opacity:1}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='text-end'>Total :</td>
                                    <td>Rp. 233,800</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    
                    <div className='mb-5'>
                        <h5 className='fw-bold fs-16px mb-4'>Pupuk Tambahan</h5>
                        <div className='d-flex align-items-center mb-3'>
                            <div className='w-50px d-flex flex-column align-items-center px-2 py-1 bg-primary text-white rounded-3'>
                                <span className='fs-13px'>Jun</span>
                                <span className='fs-22px fw-bold'>29</span>
                            </div>
                            <span className='ms-3 fw-bold'>Aplikasi Pupuk Tambahan</span>
                        </div>
                        <div className='d-flex flex-column mb-4'>
                            <span className='text-center'>Pupuk Kandang</span>
                            <span className='text-center fw-bold'>5 Kg/ha</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{height:"70px"}}></div>
        </>
    )
}

export default Page