const indianBanks = [
    {
      id: 1,
      name: 'State Bank of India',
      location: 'Mumbai, Maharashtra',
      logo: 'https://nenews.in/wp-content/uploads/2022/11/SBI.jpg',
      information: 'Largest public sector bank in India. Founded in 1806.',
      website: 'https://sbi.co.in',
      assets: 'USD 620 billion',
      branches: '22,141 branches',
      customers: '450 million',
      headquarters: 'Mumbai',
      services: ['Retail Banking', 'Corporate Banking', 'Investment Banking'],
      foundingYear: 1806,
      revenue: 'USD 50 billion',
      marketShare: '23%',
      mobileApp: true,
      ATMs: '58,000 ATMs',
      awards: ['Best Bank in India', 'Excellence in Customer Service'],
      creditRating: 'AAA',
      CEO: 'Dinesh Kumar Khara',
      socialMedia: {
        twitter: 'https://twitter.com/TheOfficialSBI',
        facebook: 'https://www.facebook.com/StateBankOfIndia',
        linkedin: 'https://www.linkedin.com/company/state-bank-of-india/',
      },
      contact: {
        phone: '+91-22-22029456',
        email: 'customercare@sbi.co.in',
      },
    },
    {
      id: 2,
      name: 'HDFC Bank',
      location: 'Mumbai, Maharashtra',
      logo: 'https://e7.pngegg.com/pngimages/257/159/png-clipart-hdfc-logo-thumbnail-bank-logos-thumbnail.png',
      information: 'Largest private sector bank in India. Established in 1994.',
      website: 'https://hdfcbank.com',
      assets: 'USD 220 billion',
      branches: '5,314 branches',
      customers: '100 million',
      headquarters: 'Mumbai',
      services: ['Retail Banking', 'Corporate Banking', 'Wealth Management'],
      foundingYear: 1994,
      revenue: 'USD 30 billion',
      marketShare: '17%',
      mobileApp: true,
      ATMs: '13,514 ATMs',
      awards: ['Best Private Bank in India', 'Digital Banking Excellence'],
      creditRating: 'AA+',
      CEO: 'Sashidhar Jagdishan',
      socialMedia: {
        twitter: 'https://twitter.com/HDFC_Bank',
        facebook: 'https://www.facebook.com/HDFC.bank',
        linkedin: 'https://www.linkedin.com/company/hdfc-bank/',
      },
      contact: {
        phone: '+91-22-6652-1000',
        email: 'support@hdfcbank.com',
      },
    },
    {
      id: 3,
      name: 'ICICI Bank',
      location: 'Mumbai, Maharashtra',
      logo: 'https://assets.stickpng.com/thumbs/627ccb0a1b2e263b45696aa5.png',
      information: 'One of the largest private sector banks in India. Founded in 1994.',
      website: 'https://icicibank.com',
      assets: 'USD 160 billion',
      branches: '5,324 branches',
      customers: '95 million',
      headquarters: 'Mumbai',
      services: ['Retail Banking', 'Corporate Banking', 'Investment Banking'],
      foundingYear: 1994,
      revenue: 'USD 25 billion',
      marketShare: '15%',
      mobileApp: true,
      ATMs: '15,678 ATMs',
      awards: ['Best Digital Bank in India', 'Innovative Banking Solutions'],
      creditRating: 'AA',
      CEO: 'Sandeep Bakhshi',
      socialMedia: {
        twitter: 'https://twitter.com/ICICIBank',
        facebook: 'https://www.facebook.com/icicibank',
        linkedin: 'https://www.linkedin.com/company/icici-bank/',
      },
      contact: {
        phone: '+91-22-3366-7777',
        email: 'customer.care@icicibank.com',
      },
    },
    {
      id: 4,
      name: 'Axis Bank',
      location: 'Mumbai, Maharashtra',
      logo: 'https://www.fintechfutures.com/files/2022/03/axis-bank-logo.jpg',
      information: 'Third-largest private sector bank in India. Founded in 1993.',
      website: 'https://axisbank.com',
      assets: 'USD 100 billion',
      branches: '4,800 branches',
      customers: '90 million',
      headquarters: 'Mumbai',
      services: ['Retail Banking', 'Corporate Banking', 'Wealth Management'],
      foundingYear: 1993,
      revenue: 'USD 18 billion',
      marketShare: '10%',
      mobileApp: true,
      ATMs: '12,839 ATMs',
      awards: ['Best Retail Bank in India', 'Innovative Banking Solutions'],
      creditRating: 'AA-',
      CEO: 'Amitabh Chaudhry',
      socialMedia: {
        twitter: 'https://twitter.com/AxisBank',
        facebook: 'https://www.facebook.com/axisbank',
        linkedin: 'https://www.linkedin.com/company/axis-bank/',
      },
      contact: {
        phone: '+91-22-2425-2525',
        email: 'customer.service@axisbank.com',
      },
    },
    {
      id: 5,
      name: 'Punjab National Bank',
      location: 'New Delhi, Delhi',
      logo: 'https://st.adda247.com/https://adda247-wp-multisite-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/multisite/sites/5/2022/04/16080018/EU_3tpTPR.jpg',
      information: 'One of the oldest banks in India. Founded in 1894.',
      website: 'https://pnb.in',
      assets: 'USD 95 billion',
      branches: '11,000 branches',
      customers: '80 million',
      headquarters: 'New Delhi',
      services: ['Retail Banking', 'Corporate Banking', 'Agricultural Banking'],
      foundingYear: 1894,
      revenue: 'USD 15 billion',
      marketShare: '8%',
      mobileApp: true,
      ATMs: '9,567 ATMs',
      awards: ['Best Public Sector Bank in India', 'Financial Inclusion'],
      creditRating: 'A+',
      CEO: 'S. S. Mallikarjuna Rao',
      socialMedia: {
        twitter: 'https://twitter.com/pnbindia',
        facebook: 'https://www.facebook.com/pnbindia',
        linkedin: 'https://www.linkedin.com/company/punjab-national-bank/',
      },
      contact: {
        phone: '+91-11-2370-8258',
        email: 'care@pnb.co.in',
      },
    },
    {
      id: 6,
      name: 'Bank of Baroda',
      location: 'Vadodara, Gujarat',
      logo: 'https://w7.pngwing.com/pngs/250/898/png-transparent-bank-of-baroda-logo-full-bank-logos.png',
      information: 'International bank with a strong presence in India. Founded in 1908.',
      website: 'https://bankofbaroda.in',
      assets: 'USD 70 billion',
      branches: '9,574 branches',
      customers: '70 million',
      headquarters: 'Vadodara',
      services: ['Retail Banking', 'Corporate Banking', 'International Banking'],
      foundingYear: 1908,
      revenue: 'USD 12 billion',
      marketShare: '6%',
      mobileApp: true,
      ATMs: '7,983 ATMs',
      awards: ['Best Bank for SMEs', 'International Banking Excellence'],
      creditRating: 'A',
      CEO: 'Sanjiv Chadha',
      socialMedia: {
        twitter: 'https://twitter.com/bankofbaroda',
        facebook: 'https://www.facebook.com/bankofbaroda',
        linkedin: 'https://www.linkedin.com/company/bankofbaroda/',
      },
      contact: {
        phone: '+91-265-2316792',
        email: 'contactus@bankofbaroda.com',
      },
    },
        {
          id: 7,
          name: 'United Bank of India',
          location: 'Mumbai, Maharashtra',
          logo: 'https://qph.cf2.quoracdn.net/main-qimg-9f21bf832b785fe277c368508828056c',
          information: 'Public sector bank with a strong national presence',
          website: 'https://www.unionbankofindia.co.in',
          assets: 'USD 75 billion',
          branches: '9,610 branches',
          customers: '60 million',
          headquarters: 'Mumbai',
          services: ['Retail Banking', 'Corporate Banking', 'Digital Banking'],
          foundingYear: 1919,
          revenue: 'USD 10 billion',
          marketShare: '4%',
          mobileApp: true,
          ATMs: '8,500 ATMs',
          awards: ['Best Public Sector Bank', 'Digital Excellence Award'],
          creditRating: 'A',
          CEO: 'Rajkiran Rai G',
          socialMedia: {
            twitter: 'https://twitter.com/UnionBankTweets',
            facebook: 'https://www.facebook.com/unionbankofficial/',
            linkedin: 'https://www.linkedin.com/company/union-bank-of-india/',
          },
          contact: {
            phone: '+91-22-22892000',
            email: 'customercare@unionbankofindia.com',
          },
        },
        {
          id: 8,
          name: 'Kotak Mahindra Bank',
          location: 'Mumbai, Maharashtra',
          logo: 'https://companyurlfinder.com/marketing/assets/img/logos/kotak.com.png',
          information: 'One of the fastest-growing banks in India',
          website: 'https://www.kotak.com',
          assets: 'USD 100 billion',
          branches: '1,603 branches',
          customers: '20 million',
          headquarters: 'Mumbai',
          services: ['Personal Banking', 'Commercial Banking', 'Wealth Management'],
          foundingYear: 2003,
          revenue: 'USD 15 billion',
          marketShare: '3%',
          mobileApp: true,
          ATMs: '4,000 ATMs',
          awards: ['Best Bank in Customer Satisfaction', 'Innovative Product of the Year'],
          creditRating: 'AA+',
          CEO: 'Uday Kotak',
          socialMedia: {
            twitter: 'https://twitter.com/KotakBankLtd',
            facebook: 'https://www.facebook.com/KotakBank/',
            linkedin: 'https://www.linkedin.com/company/kotak-mahindra-bank/',
          },
          contact: {
            phone: '+91-22-66056825',
            email: 'service.bank@kotak.com',
          },
        },
        {
          id: 9,
          name: 'IDBI Bank',
          location: 'Mumbai, Maharashtra',
          logo: 'https://i.pinimg.com/originals/6e/fb/93/6efb93f54538ebaf6c5251bc7a42713c.jpg',
          information: 'Government-owned bank with a focus on development finance',
          website: 'https://www.idbibank.in',
          assets: 'USD 50 billion',
          branches: '1,892 branches',
          customers: '30 million',
          headquarters: 'Mumbai',
          services: ['Corporate Banking', 'Retail Banking', 'MSME Banking'],
          foundingYear: 1964,
          revenue: 'USD 8 billion',
          marketShare: '2%',
          mobileApp: true,
          ATMs: '3,500 ATMs',
          awards: ['Best Bank for MSMEs', 'Excellence in Corporate Banking'],
          creditRating: 'A-',
          CEO: 'Rakesh Sharma',
          socialMedia: {
            twitter: 'https://twitter.com/IDBI_Bank',
            facebook: 'https://www.facebook.com/IDBIBank/',
            linkedin: 'https://www.linkedin.com/company/idbi-bank/',
          },
          contact: {
            phone: '+91-22-22189111',
            email: 'customercare@idbibank.com',
          },
        },
        {
          id: 10,
          name: 'IndusInd Bank',
          location: 'Mumbai, Maharashtra',
          logo: 'https://complainthub.in/wp-content/uploads/2023/07/IndusInd-Bank-logo.png',
          information: 'Offers a wide range of banking and financial services',
          website: 'https://www.indusind.com',
          assets: 'USD 85 billion',
          branches: '2,000 branches',
          customers: '25 million',
          headquarters: 'Mumbai',
          services: ['Personal Banking', 'Corporate Banking', 'NRI Banking'],
          foundingYear: 1994,
          revenue: 'USD 12 billion',
          marketShare: '4.5%',
          mobileApp: true,
          ATMs: '5,000 ATMs',
          awards: ['Best Innovation in Retail Banking', 'Excellence in Digital Banking'],
          creditRating: 'AA',
          CEO: 'Sumant Kathpalia',
          socialMedia: {
            twitter: 'https://twitter.com/MyIndusIndBank',
            facebook: 'https://www.facebook.com/OfficialIndusIndBank/',
            linkedin: 'https://www.linkedin.com/company/indusind-bank/',
          },
          contact: {
            phone: '+91-22-44066666',
            email: 'reachus@indusind.com',
          },
        },
    {
      id: 11,
      name: 'Canara Bank',
      location: 'Bengaluru, Karnataka',
      logo: 'https://static.prepp.in/public/college_data/images/logos/Banking_Logo_s_Canara_Bank_PO.png',
      information: 'One of the oldest public sector banks in India. Founded in 1906.',
      website: 'https://canarabank.com',
      assets: 'USD 65 billion',
      branches: '10,519 branches',
      customers: '65 million',
      headquarters: 'Bengaluru',
      services: ['Retail Banking', 'Corporate Banking', 'Agricultural Banking'],
      foundingYear: 1906,
      revenue: 'USD 11 billion',
      marketShare: '5%',
      mobileApp: true,
      ATMs: '9,079 ATMs',
      awards: ['Best Bank for Agriculture', 'Financial Inclusion'],
      creditRating: 'A-',
      CEO: 'Lingam Venkata Prabhakar',
      socialMedia: {
        twitter: 'https://twitter.com/canarabank',
        facebook: 'https://www.facebook.com/canarabank',
        linkedin: 'https://www.linkedin.com/company/canara-bank/',
      },
      contact: {
        phone: '+91-80-22221581',
        email: 'hocanc@canarabank.com',
      },
    },
    {
      id: 12,
      name: 'Union Bank of India',
      location: 'Mumbai, Maharashtra',
      logo: 'https://s3-symbol-logo.tradingview.com/union-bank-of-india--600.png',
      information: 'Leading public sector bank in India. Founded in 1919.',
      website: 'https://unionbankofindia.co.in',
      assets: 'USD 55 billion',
      branches: '9,609 branches',
      customers: '60 million',
      headquarters: 'Mumbai',
      services: ['Retail Banking', 'Corporate Banking', 'International Banking'],
      foundingYear: 1919,
      revenue: 'USD 10 billion',
      marketShare: '4%',
      mobileApp: true,
      ATMs: '8,923 ATMs',
      awards: ['Best Public Sector Bank', 'Digital Banking Innovation'],
      creditRating: 'A-',
      CEO: 'Rajkiran Rai G.',
      socialMedia: {
        twitter: 'https://twitter.com/UnionBankTweets',
        facebook: 'https://www.facebook.com/UnionBankOfficial',
        linkedin: 'https://www.linkedin.com/company/union-bank-of-india/',
      },
      contact: {
        phone: '+91-22-2289-2000',
        email: 'customercare@unionbankofindia.com',
      },
    },
]

export default indianBanks;