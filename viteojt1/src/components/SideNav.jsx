import React from 'react'
import { Link } from 'react-router-dom'

function SideNav({changeContent, activeItem}) {
    return (
    <div>
  {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a style={{cursor:'pointer'}} className='brand-link' onClick={() => changeContent('home')}>
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">SIMSDM</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Master SDM
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            {/* <li className="nav-item tree-1" > */}
            <li className="nav-item tree-1" onClick={() => changeContent('status_kerja')}>
              <a className={activeItem === 'status_kerja' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon " />
                <p>Manual - Status Kerja</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Data Histori
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item tree-1">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-envelope" />
                  <p>
                    Mutasi
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item tree-2" onClick={() => changeContent('cetak_skep_kj')}>
                    <a  className={activeItem === 'cetak_skep_kj' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Cetak Skep KJ</p>
                    </a>
                  </li>
                  {/* <li className="nav-item tree-2" > */}
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>                    
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>history ppoh</p>
                    </a>
                  </li>
                  <li className="nav-item tree-2" onClick={() => changeContent('laporan_pengawasan_pelaksanaan_mutasi')}>
                    <a  className={activeItem === 'laporan_pengawasan_pelaksanaan_mutasi' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Laporan Pengawasan Pelaksanaan Mutasi</p>
                    </a>
                  </li>
                  <li className="nav-item tree-2" onClick={() => changeContent('laporan_pengawasan_proses_sertijab')}>
                    <a  className={activeItem === 'laporan_pengawasan_proses_sertijab' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Laporan Pengawasan Proses Sertijab</p>
                    </a>
                  </li>
                  <li className="nav-item tree-2" onClick={() => changeContent('new_mutasi')}>
                    <a  className={activeItem === 'new_mutasi' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>New Mutasi</p>
                    </a>
                  </li>
                </ul>
            </li>
            <li className="nav-item tree-1">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-file" />
                  <p>
                    Transferable
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Histori Transferabilitas</p>
                    </a>
                  </li>
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Transferable</p>
                    </a>
                  </li>
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Laporan Status Transferablitias</p>
                    </a>
                  </li>
                </ul>
            </li>
          </ul>
        </li>
        
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tree" />
            <p>
              Pegawai (Peg12)
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item tree-1">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Pencarian Berdasarkan
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Nama</p>
                    </a>
                  </li>
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Nippos</p>
                    </a>
                  </li>
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Kriteria</p>
                    </a>
                  </li>
                </ul>
            </li>
            <li className="nav-item tree-1">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Pencarian Khusus
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Lama Menjabat</p>
                    </a>
                  </li>
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Status CLTP</p>
                    </a>
                  </li>
                </ul>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Peg12 Umum</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Profiling Peg12</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Pencarian Peg12</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-calendar" />
            <p>
              Laporan
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Pencarian Berdasarkan Kriteria</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Status Proses Sertijab</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Gender</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Usia Karyawan</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Masa Kerja</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>TMT, CBS Akhir, MPP, Pensiun</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Status Nikah</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Golongan Darah</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Agama</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Promosi dan PJS</p>
              </a>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>Realisasi CBS Akhir, MPP, </p>
              </a>
            </li>
            <li className="nav-item tree-1">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-image" />
                  <p>
                    Cleansing Data
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Data Karyawan Pada Bagian Non Aktif</p>
                    </a>
                  </li>
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Data Karyawan Pada Jabatan Non Aktif</p>
                    </a>
                  </li>
                  <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
                    <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                      <i className="far fa-circle nav-icon" />
                      <p>Data Karyawan Pada Nopend Kantor Non AKtif</p>
                    </a>
                  </li>
                </ul>
            </li>
            <li className="nav-item tree-2" onClick={() => changeContent('history_ppoh')}>
              <a  className={activeItem === 'history_ppoh' ? 'nav-link active' : 'nav-link'} >
                <i className="far fa-circle nav-icon" />
                <p>TMT CBS Akhir, MPP, Pensiun per Kantor</p>
              </a>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    </div>
    )
}

export default SideNav