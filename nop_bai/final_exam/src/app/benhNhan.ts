export interface BenhNhan {
  id: number;
  code: string;
  name: string;
  dateStart: string;
  dateEnd: string;
  lyDo: string;
  phuongPhap: string;
  bacSi: string;
  benhAn: {
    id: number,
    code: string
  };
}
