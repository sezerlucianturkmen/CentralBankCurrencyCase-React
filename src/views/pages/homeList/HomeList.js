import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrencies } from 'src/store/features/currencySlice'
import Loading from '../../../components/loading/Loading'
import {
  CButton,
  CCard,
  CCardBody,
  CFormInput,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CContainer,
} from '@coreui/react'
import { cilMoney } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const HomeList = () => {
  const currencyList = useSelector((state) => state.currency.currencyList)
  const updateChanges = useSelector((state) => state.currency.isAsked)
  const loading = useSelector((state) => state.currency.isLoading)
  const [date, setDate] = useState('')

  const dispatch = useDispatch()

  const getAllCurrencies = () => {
    console.log(date)
    dispatch(
      getCurrencies({
        date: date,
      }),
    )
  }

  useEffect(() => {}, [currencyList.size, updateChanges])

  return (
    <>
      <CCard className="mb-4 backCard">
        <CCardBody>
          <CContainer>
            <CRow>
              <CCol xs="auto" className="me-auto">
                <h5 className="card-title fs-4 fw-semibold m-2">
                  {' '}
                  Currency List From Central Bank of Turkey
                </h5>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="auto" className="me-auto">
                <p className=" m-2">Number of Currencies Below : {currencyList.length}</p>
              </CCol>
            </CRow>
            <br></br>
            <CRow className="justify-content-center mb-3 mt-3">
              <CCol xs={4}>
                <CFormInput type="date" onChange={(e) => setDate(e.target.value)} />
              </CCol>
              <CCol xs={2}>
                <CButton
                  className="butonSize"
                  color="success"
                  variant="outline"
                  onClick={getAllCurrencies}
                >
                  <CIcon icon={cilMoney} /> Request
                </CButton>
              </CCol>
            </CRow>
          </CContainer>
          <CContainer>
            <CTable align="middle" className="mb-2 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">Index</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Currency Code</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Unit</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Currency Name</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Forex Buying</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Forex Selling</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Banknote Buying</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Banknote Selling</CTableHeaderCell>
                  <CTableHeaderCell className="text-center"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {loading ? (
                  <Loading />
                ) : (
                  currencyList.map((type, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <div>{index + 1}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.currencyCode}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.unit}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.currencyName}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.forexBuying}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.forexSelling}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.banknoteBuying}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.banknoteSelling}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))
                )}
              </CTableBody>
            </CTable>
          </CContainer>
        </CCardBody>
      </CCard>
    </>
  )
}

export default HomeList
