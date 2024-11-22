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
                    <div className='mb-3'>
                        <h5 className='fw-semibold fs-16px mb-3'>Kondisi Lahan</h5>
                        <span className='fw-semibold fs-13px text-success mb-2'>PARAMETER</span>
                        <div className='d-flex flex-column'>
                            <div className='d-flex align-items-center mb-3'>
                                <div className='icon-50 bg-success fs-35px fw-bold text-white rounded-3'>N</div>
                                <div className='w-50px fw-bold text-end fs-22px ms-1'>16</div>
                                <div className='d-flex align-items-center flex-grow-1'>
                                    <div className='position-relative d-flex flex-grow-1 ms-2'>
                                        <div className="progress-stacked flex-grow-1 progress-range" style={{height:"5px"}}>
                                            <div className="progress" role="progressbar" style={{width:"33%"}}>
                                                <div className="progress-bar"></div>
                                            </div>
                                            <div className="progress" role="progressbar" style={{width:"33%"}}>
                                                <div className="progress-bar bg-success"></div>
                                            </div>
                                            <div className="progress" role="progressbar" style={{width:"34%"}}>
                                                <div className="progress-bar bg-info"></div>
                                            </div>
                                        </div>
                                        <div className='progress-pin' style={{left:"calc(-4px + 20%"}}></div>
                                    </div>
                                    <span className='w-50px fs-13px ms-2'>Rendah</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <div className='icon-50 bg-success fs-35px fw-bold text-white rounded-3'>P</div>
                                <div className='w-50px fw-bold text-end fs-22px ms-1'>20</div>
                                <div className='d-flex align-items-center flex-grow-1'>
                                    <div className='position-relative d-flex flex-grow-1 ms-2'>
                                        <div className="progress-stacked flex-grow-1" style={{height:"5px"}}>
                                            <div className="progress" role="progressbar" style={{width:"33%"}}>
                                                <div className="progress-bar"></div>
                                            </div>
                                            <div className="progress" role="progressbar" style={{width:"33%"}}>
                                                <div className="progress-bar bg-success"></div>
                                            </div>
                                            <div className="progress" role="progressbar" style={{width:"34%"}}>
                                                <div className="progress-bar bg-info"></div>
                                            </div>
                                        </div>
                                        <div className='progress-pin' style={{left:"calc(-4px + 7%"}}></div>
                                    </div>
                                    <span className='w-50px fs-13px ms-2'>Rendah</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <div className='icon-50 bg-success fs-35px fw-bold text-white rounded-3'>K</div>
                                <div className='w-50px fw-bold text-end fs-22px ms-1'>20</div>
                                <div className='d-flex align-items-center flex-grow-1'>
                                    <div className='position-relative d-flex flex-grow-1 ms-2'>
                                        <div className="progress-stacked flex-grow-1" style={{height:"5px"}}>
                                            <div className="progress" role="progressbar" style={{width:"33%"}}>
                                                <div className="progress-bar"></div>
                                            </div>
                                            <div className="progress" role="progressbar" style={{width:"33%"}}>
                                                <div className="progress-bar bg-success"></div>
                                            </div>
                                            <div className="progress" role="progressbar" style={{width:"34%"}}>
                                                <div className="progress-bar bg-info"></div>
                                            </div>
                                        </div>
                                        <div className='progress-pin' style={{left:"calc(-4px + 7%"}}></div>
                                    </div>
                                    <span className='w-50px fs-13px ms-2'>Rendah</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <div className='icon-50 bg-success fs-30px fw-bold text-white rounded-3'>pH</div>
                                <div className='w-50px fw-bold text-end fs-22px ms-1'>20</div>
                                <div className='d-flex align-items-center flex-grow-1'>
                                    <div className='position-relative d-flex flex-grow-1 ms-2'>
                                        <div className="progress-stacked flex-grow-1" style={{height:"5px"}}>
                                            <div className="progress" role="progressbar" style={{width:"33%"}}>
                                                <div className="progress-bar bg-warning"></div>
                                            </div>
                                            <div className="progress" role="progressbar" style={{width:"33%"}}>
                                                <div className="progress-bar bg-danger"></div>
                                            </div>
                                            <div className="progress" role="progressbar" style={{width:"34%"}}>
                                                <div className="progress-bar bg-purple"></div>
                                            </div>
                                        </div>
                                        <div className='progress-pin' style={{left:"calc(-4px + 45%"}}></div>
                                    </div>
                                    <span className='w-50px fs-13px ms-2'>Netral</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <div className='row'>
                            <div className='col-4 mb-4'>
                                <label className='fw-semibold text-success'>NITROGEN(N)</label>
                                <select className='form-select focus-0 border-0' style={{width:"100px"}}>
                                    <option selected>Urea</option>
                                </select>
                            </div>
                            <div className='col-4 mb-4'>
                                <label className='fw-semibold text-success'>FOSFOR(P)</label>
                                <select className='form-select focus-0 border-0' style={{width:"100px"}}>
                                    <option selected>SP36</option>
                                </select>
                            </div>
                            <div className='col-4 mb-4'>
                                <label className='fw-semibold text-success'>KALIUM(K)</label>
                                <select className='form-select focus-0 border-0' style={{width:"100px"}}>
                                    <option selected>KCL</option>
                                </select>
                            </div>
                            <div className='col-12 mb-4'>
                                <label className='fw-semibold text-success'>PUPUK MAJEMUK</label>
                                <select className='form-select focus-0 border-0'>
                                    <option selected>Phonska</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <div class="d-grid gap-2">
                            <Link href="/analisa/rekomendasi_pemupukan" class="btn btn-success fw-bold">Rekomendasi Pemupukan</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{height:"70px"}}></div>
        </>
    )
}

export default Page