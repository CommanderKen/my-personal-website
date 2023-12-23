import React from 'react';
import { TiBusinessCard } from "react-icons/ti";
import '../../App.css';
import './Curriculum.css';
import CurriculumPdfIt from '../../documents/CV_It.pdf'
import CurriculumPdfEn from '../../documents/CV_En.pdf'

function Curriculum() {
  const openCurriculumEn = () => {
    window.open(CurriculumPdfEn);
  }

  const openCurriculumIt = () => {
    window.open(CurriculumPdfIt);
  }

  return (
    <div className='background-curriculum'>
      <div className='curriculum-container'>
        <div className='curriculum-card' onClick={openCurriculumEn}>
          <h2 className='curriculum-title'>My Curriculum Vitae in English</h2>
          <TiBusinessCard className='curriculum-icon'/>
        </div>
        <div className='curriculum-card' onClick={openCurriculumIt}>
          <h2 className='curriculum-title'>Il mio Curriculum Vitae in italiano</h2>
          <TiBusinessCard className='curriculum-icon' />
        </div>
      </div>
    </div>
  )
}

export default Curriculum;