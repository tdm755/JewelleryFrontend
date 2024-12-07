import { createContext, useState } from 'react'
import { Routes as CoverRoute, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LayoutPage from './Pages/LayoutPage'
import SipCalculator from './Component/Sip'
import EmiCalculator from './Component/EMI'
import KittySchemeCalculator from './Component/KittyCalculator'
import AboutUsPage from './Pages/AboutUsPage'
import ContactUsPage from './Pages/ContactUsPage'
import JewellerySection from './Pages/Jewelleries'
import JewelDetailModal from './Utils/JewelDetailModal'


export const jewelDetailModalContext = createContext(null);

function App() {

  const [showDetailModal, setShowDetailModal] = useState(false);

  return (
    <>
    <jewelDetailModalContext.Provider value={{ showDetailModal, setShowDetailModal }}>
      <CoverRoute>
        <Route path="/" element={<LayoutPage />} >
          <Route index element={<HomePage />} />
          <Route path='aboutus' element={<AboutUsPage />} />
          <Route path='jewellery' element={<JewellerySection />} />
          <Route path='contactus' element={<ContactUsPage />} />
          <Route path='jewellery/contactus' element={<ContactUsPage />} />
          <Route path='sip' element={<SipCalculator />} /> 
          <Route path='emi' element={<EmiCalculator />} /> 
          <Route path='kitty' element={<KittySchemeCalculator />} /> 

        </Route>
      </CoverRoute>
    </jewelDetailModalContext.Provider>
     {showDetailModal && <JewelDetailModal  showDetailModal={showDetailModal} setShowDetailModal={setShowDetailModal} />}

    </>
  )
}

export default App
