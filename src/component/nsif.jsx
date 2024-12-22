import React from 'react';

const Nsif = () => {
  return (
    <div
      style={{
        padding: '20px',
        margin: '20px auto',
        maxWidth: '90%',
        border: '2px solid #4CAF50',
        borderRadius: '10px',
        backgroundColor: '#fefefe',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#c42408',
        textDecoration : 'underline',
          textTransform: 'uppercase',
          fontSize: '1.8rem', // Scales better on smaller screens
        }}
      >
        Motto of National Security & Intelligence Force (NSIF)
      </h1>
      <p
        style={{
          lineHeight: '1.8',
          textAlign: 'justify',
          fontSize: '1rem',
        }}
      >
        <strong className='text-black'>National Security & Intelligence Force (NSIF)</strong> is a{' '}
        <strong>think tank</strong> for <span style={{ color: '#FF5733' }}>Media & Society</span>, working
        towards the <strong>Security & Intelligence</strong> of the Nation. It serves the country from time to
        time for <span style={{ color: '#FF5733' }}>security & intelligence purposes</span> and cooperates
        with the <strong>Government of India</strong> by providing{' '}
        <span style={{ color: '#FF5733' }}>vital information, suggestions,</span> and advisory services. NSIF
        works closely with various security agencies like <strong>Home Ministry, NIA, CBI, IB, RAW,</strong>{' '}
        and more.
      </p>

      <h2
        style={{
          marginTop: '20px',
          color: '#4CAF50',
          fontSize: '1.5rem',
        }}
      >
        Important Programmes of NSIF
      </h2>
      <ul
        style={{
          lineHeight: '1.8',
          fontSize: '1rem',
          paddingLeft: '20px',
          marginTop: '10px',
          listStyleType: 'disc',
        }}
      >
        <li>
          The main function of NSIF is to ensure{' '}
          <span style={{ color: '#FF5733' }}>National & Internal Security</span>, strengthen{' '}
          <strong>Unity & Integrity</strong>, and <strong>protect the motherland</strong>.
        </li>
        <li>
          Providing <span style={{ color: '#FF5733' }}>full cooperation</span> to <strong>Police Forces</strong>,{' '}
          <strong>Investigation Agencies</strong>, and <strong>Security Agencies</strong> of the Government of
          India.
        </li>
        <li>
          Offering necessary <span style={{ color: '#FF5733' }}>training</span> to NSIF officers and secret
          agents in collaboration with:
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li>Union Home Ministry</li>
            <li>Directorate of Civil Defense (DCD)</li>
            <li>National Disaster Management Authority (NDMA)</li>
            <li>National Disaster Relief Force (NDRF)</li>
            <li>Intelligence Bureau (IB)</li>
            <li>Territorial Army (TA)</li>
          </ul>
        </li>
        <li>
          Assisting the <span style={{ color: '#FF5733' }}>Government, Society,</span> and{' '}
          <span style={{ color: '#FF5733' }}>Public</span> during national challenges or crises.
        </li>
        <li>
          Expanding NSIF branches across the country, from <strong>national</strong> to <strong>rural levels</strong>.
        </li>
        <li>
          Conducting <strong>secret investigations</strong> to track down{' '}
          <span style={{ color: '#FF5733' }}>suspicious persons</span>, smugglers, traitors, and terrorists, and
          ensuring legal action against them.
        </li>
        <li>
          Promoting awareness to create <span style={{ color: '#FF5733' }}>responsible citizens</span> and fostering a
          strong national organization.
        </li>
      </ul>
    </div>
  );
};

export default Nsif;
