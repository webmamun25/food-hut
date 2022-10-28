import React from 'react';
import { CDBFooter } from 'cdbreact';
import { CDBBox } from 'cdbreact';
import { CDBBtn,CDBIcon,CDBFooterLink,CDBContainer,CDBTable,CDBTableBody } from "cdbreact";
import './Footer.css';
const Footer = () => {
    return (
        <>
      <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            
              <span className="ml-3 h5 font-weight-bold">Food-Hut</span>
          
            <CDBBox className="mt-5" display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              FOOD-HUT
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <CDBFooterLink href="/">Service</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              PRODUCTS
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <CDBFooterLink href="/">Burger</CDBFooterLink>
              <CDBFooterLink href="/">Pizza</CDBFooterLink>
              <CDBFooterLink href="/">Coffee</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 ms-3" style={{ fontWeight: '600' }}>
            OPENING HOURS
            </p>
            <CDBContainer>
      <CDBTable>
       
        <CDBTableBody>
          <tr>
            
            <td>Mon - Thu:</td>
            <td>8am - 9pm</td>
            
          </tr>
          <tr>
            
            <td>Fri - Sat:</td>
            <td>8am - 1am</td>
            
          </tr>
          <tr>
            
            <td>Sunday:</td>
            <td>9am - 10pm</td>
            
          </tr>
        </CDBTableBody>
      </CDBTable>
    </CDBContainer>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; FoodHut, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
</>
    );
};

export default Footer;