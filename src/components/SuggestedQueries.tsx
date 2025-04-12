
import React from 'react';

interface SuggestedQueriesProps {
  queries: string[];
  onSelectQuery: (query: string) => void;
}

const SuggestedQueries: React.FC<SuggestedQueriesProps> = ({ queries, onSelectQuery }) => {
  return (
    <div className="suggested-queries p-4 bg-gray-50">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Try asking about:</h3>
      <div className="flex flex-wrap gap-2">
        {queries.slice(0, 5).map((query, index) => (
          <button
            key={index}
            onClick={() => onSelectQuery(query)}
            className="px-3 py-1.5 bg-white text-sm text-asha-dark border border-gray-200 rounded-full hover:bg-asha-lavender hover:text-asha-purple transition-colors"
          >
            {query}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQueries;
