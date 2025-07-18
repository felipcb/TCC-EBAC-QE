import { htmlReport } from 'k6-html-reporter';

// após o teste, gerar relatório html
export function handleSummary(data) {
  return {
    'k6-report.html': htmlReport(data), 
  };
}

