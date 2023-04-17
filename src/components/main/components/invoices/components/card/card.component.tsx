import InvoiceStatus from '../../../../../invoice-status/invoice-status.component';

export default function Card() {
  return (
    <div className="flex justify-between rounded-lg bg-white p-6">
      <div className="flex flex-col gap-6">
        <p className="heading-small-variant">
          <span className="text-grey">#</span>RT3080
        </p>
        <div>
          <p className="body-variant mb-2 text-grey">
            Due <span>19 Aug 2021</span>
          </p>
          <p className="heading-small">
            £ <span>1,800.90</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between text-right">
        <p className="body-variant text-grey">Jensen Huang</p>
        <InvoiceStatus status="paid" />
      </div>
    </div>
  );
}
