import GoBack from '@/components/go-back/go-back.component';
import Button from '@/components/button/button.component';
import InvoiceStatus from '@/components/invoice-status/invoice-status.component';

export default function ViewInvoice() {
  return (
    <main>
      <div className="mx-auto mb-14 grid w-[327px] pt-8">
        <GoBack />
        <div className="mt-8 grid gap-y-4">
          <div className="flex items-center justify-between rounded-lg bg-white p-6">
            <p className="body-variant text-grey">Status</p>
            <InvoiceStatus status="pending" />
          </div>
          <div className="grid gap-y-8 rounded-lg bg-white p-6">
            <div className="flex flex-col gap-8">
              <div>
                <p className="heading-small">
                  <span className="text-grey">#</span>XM9141
                </p>
                <p className="body-variant text-grey">Graphic Design</p>
              </div>
              <address>
                19 Union Terrace
                <br />
                London
                <br />
                E1 3EZ
                <br />
                United Kingdom
              </address>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-8">
              <div className="flex flex-col justify-between">
                <div>
                  <p className="body-variant mb-3 text-grey">Invoice Date</p>
                  <p className="heading-small">21 Aug 2021</p>
                </div>
                <div>
                  <p className="body-variant mb-3 text-grey">Payment due</p>
                  <p className="heading-small">20 Sept 2021</p>
                </div>
              </div>
              <div>
                <p className="body-variant mb-3 text-grey">Bill to</p>
                <p className="heading-small mb-2">Alex Grim</p>
                <address>
                  84 Church Way
                  <br />
                  Bradford
                  <br />
                  BD1 9PB
                  <br />
                  United Kingdom
                </address>
              </div>
              <div>
                <p className="body-variant mb-3 text-grey">Sent to</p>
                <p className="heading-small">alexgrim@mail.com</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <div className="grid gap-y-6 bg-lighter-grey p-6">
                <div className="heading-small flex items-center justify-between">
                  <div>
                    <p>Banner Design</p>
                    <p className="text-clay">1 x £156.00</p>
                  </div>
                  <p>£156.00</p>
                </div>
                <div className="heading-small flex items-center justify-between">
                  <div>
                    <p>Email Design</p>
                    <p className="text-clay">2 x £200.00</p>
                  </div>
                  <p>£400.00</p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-darker-grey p-6">
                <p className="body text-white">Grand total</p>
                <p className="heading-medium text-white">£556.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-white p-6">
        <Button type="edit">Edit</Button>
        <Button type="delete">Delete</Button>
        <Button type="primary">Mark as Paid</Button>
      </div>
    </main>
  );
}
