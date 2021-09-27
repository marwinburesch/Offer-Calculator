import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Textarea from '../../components/Textarea/Textarea';
import Cards from '../../components/Cards/Cards';
import styles from './CompanyOverview.module.css';
import { useHistory } from 'react-router';

export default function CompanyOverview(): JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="FIRMEN ÜBERSICHT" />
      <main className={styles.cardWrapper}>
        <Textarea
          isEditable={false}
          setIsEditable={console.log}
          onDeleteClick={console.log}
          companyValue="Muster Firma"
          ceoValue="Muster Mann"
          phoneNumberValue="0...."
          mobileValue="0...."
          emailValue="Muster@mail.de"
          urlValue="www.Muster.de"
          streetValue="Muster Straße"
          plzValue="0...."
          cityValue="Muster Stadt"
          managerValue="Muster Frau"
          managerPhoneValue="0...."
        />
        <Cards
          onClick={() => history.push('/companydetails')}
          name="Profil Hinzufügen"
          type="chose"
        />
      </main>
      <Navigation
        callToAction={true}
        isFirstStep={false}
        isHomeActive={false}
      />
    </div>
  );
}
