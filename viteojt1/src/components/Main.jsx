import React from 'react'
import ManualStatusKerja from '../menu/masterSDM/ManualStatusKerja'

import Dashboard from './Dashboard'

// import cetak_skep_kj from '../menu/dataHistori/mutasi/cetak_skep_kj'
// import history_ppoh_rangkap_jabatan from '../menu/dataHistori/mutasi/History_PPOH_Rangkap_Jabatan'
// import laporan_pengawasan_pelaksanaan_mutasi from '../menu/dataHistori/mutasi/laporan_pengawasan_pelaksanaan_mutasi'
// import laporan_pengawasan_proses_sertijab from '../menu/dataHistori/mutasi/laporan_pengawasan_proses_sertijab'
// import new_mutasi from '../menu/dataHistori/mutasi/new_mutasi'

import Cetak_skep_kj from '../menu/dataHistori/mutasi/Cetak_skep_kj'
import History_ppoh_rangkap_jabatan from '../menu/dataHistori/mutasi/History_ppoh_rangkap_jabatan'
import Laporan_pengawasan_pelaksanaan_mutasi from '../menu/dataHistori/mutasi/Laporan_pengawasan_pelaksanaan_mutasi'
import Laporan_pengawasan_proses_sertijab from '../menu/dataHistori/mutasi/Laporan_pengawasan_proses_sertijab'
import New_mutasi from '../menu/dataHistori/mutasi/New_mutasi'

import History_transferable from '../menu/dataHistori/transferable/history_transferable'
import Laporan_status_transferable from '../menu/dataHistori/transferable/Laporan_status_transferable'
import Transferable from '../menu/dataHistori/transferable/Transferable'

function Main({ currentPage }) {
    return(
    <div className='content-wrapper'>
      {/* <h1 >Hello</h1> */}

      {/* <ManualStatusKerja /> */}

      {/* MasterSDM */}
      
      {/* Data Histori - Mutasi */}
      {currentPage === 'home' && <Dashboard />}

      {currentPage === 'status_kerja' && <ManualStatusKerja />}

      {currentPage === 'cetak_skep_kj' && <Cetak_skep_kj />}
      {currentPage === 'history_ppoh' && <History_ppoh_rangkap_jabatan />}
      {currentPage === 'laporan_pengawasan_pelaksanaan_mutasi' && <Laporan_pengawasan_pelaksanaan_mutasi /> }
      {currentPage === 'laporan_pengawasan_proses_sertijab' && <Laporan_pengawasan_proses_sertijab /> }
      {currentPage === 'new_mutasi' && <New_mutasi /> }
      
      {currentPage === 'History_transferable' && <History_transferable /> }
      {currentPage === 'Laporan_status_transferable' && <Laporan_status_transferable /> }
      {currentPage === 'Transferable' && <Transferable /> }
      
      {/* {currentPage === 'status_kerja' && <ManualStatusKerja />}
      {currentPage === 'status_kerja' && <ManualStatusKerja />} */}

    </div>
        
    )
}

export default Main