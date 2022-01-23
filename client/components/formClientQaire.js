import React from 'react'
import { useEffect, useState } from 'react'


const formClientQuestionnaire = (props) => {

  const [clientInfo, setClientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    aboutYou: '',
    firstCat: '',
    otherPets: '',
    city: '',
    state: '',
    fB: '',
    iG: ''
  })

  const [catPref, setCatPref] = useState ({
    gender: '',
    ears: '',
    color: '',
    mif: '',
  })

  const handleClientInfo = (event) => {
    event.persist();
    setClientInfo(
      prevClientInfo => {
        return {...prevClientInfo, [event.target.name]: event.target.value}
      })
    console.log(clientInfo)
  }

  const handleCatPref = (event) => {

  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form id="clientQuestionnaire" onSubmit={handleSubmit}>
        <div onChange={handleClientInfo}>
          {/* about customer */}
          <h2>About You</h2>
          {/* client first name */}
          <label htmlFor="firstName">First name:</label><br />
          <input type="text" name="firstName" value={clientInfo.firstName} /><br />
          {/* client last name */}
          <label htmlFor="lname">Last name:</label><br />
          <input type="text" name="lastName" value={clientInfo.lastName} /><br />
          {/* client email */}
          <label htmlFor="eMail">E-Mail</label><br />
          <input type="email" name="email" value={clientInfo.email} /><br />
          {/* client about yourself */}
          <label htmlFor="aboutYou">Tell Us About Yourself</label><br />
          <input type="text" name="aboutYou" value="" /><br />
          {/* client first time cat owner? */}
          <label htmlFor="firstCat">Are you a first time cat owner?</label><br />
          <input type="radio" name="firstCat" value={clientInfo.firstCat} />
          <label htmlFor="yesToFirstCat">Yes</label>
          <input type="radio" name="firstCatNo" value="" />
          <label htmlFor="noToFirstCat">No</label><br />
          {/* client other pets? */}
          <label htmlFor="otherPets">If you own other pets, please list them.</label><br />
          <input type="text" name="otherPets" value={clientInfo.otherPets} />

          <h2>Where are you located</h2>
          {/* client city */}
          <label htmlFor="clientCity">City</label><br />
          <input type="text" name="city" value={clientInfo.city} /><br />
          {/* client state */}
          <label htmlFor="clientState">State</label><br />
          <input type="text" name="state" value={clientInfo.state} /><br />
        </div>

        <h2>What are you looking for in your kitty?</h2>
        {/* cat gender */}
        <label htmlFor="kittyGender">Gender</label><br />
        <input type="radio" name="genderMale" value="" />
        <label htmlFor="answerMale">Male</label>
        <input type="radio" name="genderFemale" value="" />
        <label htmlFor="answerMale">Female</label><br />
        {/* cat ears */}
        <label htmlFor="kittyEars">Ears</label><br />
        <input type="radio" name="fold" value="" />
        <label htmlFor="answerFold">Fold</label>
        <input type="radio" name="Straight" value="" />
        <label htmlFor="answerStraight">Straight</label><br />
        {/* cat color */}
        <label htmlFor="kittyColor">Color</label><br />
        <input type="text" name="color" value="" /><br />
        {/* cat most important feature */}
        <label htmlFor="importantFeature">What is the most import feature you are looking for in your kitten?</label><br />
        <input type="text" name="mif" value="" /><br />

        <h2>Your FaceBook and Instagram</h2>

        <label htmlFor="clientFB">Your FaceBook</label><br />
        <input type="text" name="clientFB" value="" /><br />

        <label htmlFor="clientIG">Your Instagram</label><br />
        <input type="text" name="clientIG" value="" /><br />

      </form>
    </div>
  )
}

export default formClientQuestionnaire
