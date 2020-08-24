// React imports
import React from 'react';

// Custom imports
import NonprofitCard from './NonprofitCard';
import './NonprofitCardCollection.scss';

// This functional component holds a collection of nonprofit cards
// Layout:
// Nonprofit Cards

//GraphQL imports
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

//file generated by running npm run apollo:generate, this looks at our graphql schema and creates types for typescript based on the schema
import { getNonprofits } from '../generated/getNonprofits';

const GET_ALL_NONPROFITS = gql`
  query getNonprofits {
    getNonprofits {
      id
      logo
      displayName
      mission
    }
  }
`;

const NonprofitCardCollection = () => {
  const { loading, data } = useQuery<getNonprofits>(GET_ALL_NONPROFITS);
  if (loading || !data) return null;
  return (
    <div className="nonprofitCardContainer">
      {data.getNonprofits.map(nonprofit => {
        return <NonprofitCard key={nonprofit.id} nonprofit={nonprofit} />;
      })}
    </div>
  );
};

export default NonprofitCardCollection;
