import { Component } from '@angular/core';


const dictionary ={
website_contact_h1:"Contact Information"
,website_contact_h2:"Sponsors and Supporters"
,website_contact_info_p1:"If you have any questions or comments regarding the Puget Sound Regional Travel Study, please contact us by email or phone."
,website_contact_info_p2:"Media inquiries: Rick Olson,"
,website_contact_info_p3:"Project inquiries: Neil Kilgren,"
,website_contact_info_p5:"Project inquiries: Brian Lee,"
,website_contact_info_p4:"Information about the survey:"

,website_contact_sponsors_p1:"The Puget Sound Regional Council is the regional sponsor. The City of Redmond and the City of Seattle are sponsoring extra data collection in their respective jurisdictions."

,website_contact_sponsors_h1:"PARTNERS"
,website_contact_sponsors_h2:"SUPPORTERS"

,website_contact_sponsors_url_1:"http://www.psrc.org/"
,website_contact_sponsors_url_2:"http://www.wsdot.wa.gov/"
,website_contact_sponsors_url_3:"http://www.seattle.gov/transportation/"
,website_contact_sponsors_url_4:"http://www.kingcounty.gov/"
,website_contact_sponsors_url_5:"http://www.kitsapgov.com/"
,website_contact_sponsors_url_6:"http://www.co.pierce.wa.us/"
,website_contact_sponsors_url_7:"http://snohomishcountywa.gov/"
,website_contact_sponsors_url_8:"http://www.ci.issaquah.wa.us/"
,website_contact_sponsors_url_9:"http://www.cityofmillcreek.com/"
,website_contact_sponsors_url_10:"http://www.cityofpoulsbo.com/"
,website_contact_sponsors_url_11:"http://www.ci.stanwood.wa.us/"
,website_contact_sponsors_url_12:"http://www.ci.bellevue.wa.us/"
,website_contact_sponsors_url_13:"https://www.redmond.gov/"
}

@Component({
  selector: 'sponsors',
  templateUrl: './sponsors.component.html',
})
export class SponsorsComponent  {
  Provider = dictionary;
 }
