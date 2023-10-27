import React from 'react'
import ManualStatusKerja from '../menu/masterSDM/ManualStatusKerja'

import Dashboard from './Dashboard'

import Cetak_skep_kj from '../menu/dataHistori/mutasi/Cetak_skep_kj'
import History_ppoh_rangkap_jabatan from '../menu/dataHistori/mutasi/History_ppoh_rangkap_jabatan'
import Laporan_pengawasan_pelaksanaan_mutasi from '../menu/dataHistori/mutasi/Laporan_pengawasan_pelaksanaan_mutasi'
import Laporan_pengawasan_proses_sertijab from '../menu/dataHistori/mutasi/Laporan_pengawasan_proses_sertijab'
import New_mutasi from '../menu/dataHistori/mutasi/New_mutasi'

import History_transferable from '../menu/dataHistori/transferable/history_transferable'
import Laporan_status_transferable from '../menu/dataHistori/transferable/Laporan_status_transferable'
import Transferable from '../menu/dataHistori/transferable/Transferable'

import Nama from '../menu/pegawai(Peg12)/pencarianBerdasarkan/Nama'
import Nippos from '../menu/pegawai(Peg12)/pencarianBerdasarkan/Nippos'
import Kriteria from '../menu/pegawai(Peg12)/pencarianBerdasarkan/Kriteria'

import Lama_menjabat from '../menu/pegawai(Peg12)/pencarianKhusus/Lama_menjabat'
import Status_cltp from '../menu/pegawai(Peg12)/pencarianKhusus/Status_cltp'

import Peg12_umum from '../menu/pegawai(Peg12)/Peg12_umum'
import Pencarian_peg12 from '../menu/pegawai(Peg12)/Pencarian_peg12'
import Profiling_peg12 from '../menu/pegawai(Peg12)/Profiling_peg12'

function Main({ currentPage }) {
    return(
    <div className='content-wrapper'>
      {/* <h1 >Hello</h1> */}

      {/* <ManualStatusKerja /> */}

      {currentPage === 'home' && <Dashboard />}
      {/* MasterSDM */}
      {currentPage === 'status_kerja' && <ManualStatusKerja />}
      
      {/* Data Histori - Mutasi */}
      {currentPage === 'cetak_skep_kj' && <Cetak_skep_kj />}
      {currentPage === 'history_ppoh' && <History_ppoh_rangkap_jabatan />}
      {currentPage === 'laporan_pengawasan_pelaksanaan_mutasi' && <Laporan_pengawasan_pelaksanaan_mutasi /> }
      {currentPage === 'laporan_pengawasan_proses_sertijab' && <Laporan_pengawasan_proses_sertijab /> }
      {currentPage === 'new_mutasi' && <New_mutasi /> }

      {/* Data Histori - Transferable */}
      {currentPage === 'History_transferable' && <History_transferable /> }
      {currentPage === 'Laporan_status_transferable' && <Laporan_status_transferable /> }
      {currentPage === 'Transferable' && <Transferable /> }

      {/* Pegawai(Peg12) - Pencarian Berdasarkan */}
      {currentPage === 'Kriteria' && <Kriteria /> }
      {currentPage === 'Nama' && <Nama /> }
      {currentPage === 'Nippos' && <Nippos /> }

      {/* Pegawai(Peg12) - Pencarian Khusus */}
      {currentPage === 'Lama_menjabat' && <Lama_menjabat /> }
      {currentPage === 'Status_cltp' && <Status_cltp /> }

      {/* Pegawai(Peg12) */}
      {currentPage === 'Peg12_umum' && <Peg12_umum /> }
      {currentPage === 'Pencarian_peg12' && <Pencarian_peg12 /> }
      {currentPage === 'Profiling_peg12' && <Profiling_peg12 /> }

      {/* {currentPage === 'status_kerja' && <ManualStatusKerja />}
      {currentPage === 'status_kerja' && <ManualStatusKerja />} */}

    </div>
        
    )
}

export default Main