import React from 'react';

interface DataTableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
}

const DataTable = <T extends { id: any }>({ headers, data, renderRow }: DataTableProps<T>) => {
  return (
    <div className="bg-white shadow-soft rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-panel">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-text-light uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.length > 0 ? (
                data.map((item) => (
                    <React.Fragment key={item.id}>{renderRow(item)}</React.Fragment>
                ))
            ) : (
                <tr>
                    <td colSpan={headers.length} className="text-center py-10 text-gray-500">
                        No data available.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
       <div className="px-6 py-3 bg-panel border-t text-xs text-text-light">
          <p>Showing {data.length} of {data.length} results.</p>
      </div>
    </div>
  );
};

export default DataTable;