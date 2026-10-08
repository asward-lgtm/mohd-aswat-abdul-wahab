import React from 'react';
import { MediaPrimaLogo } from './MediaPrimaLogo';

interface FileViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  fileSize?: string;
  fileType?: string;
  fileUrl?: string;
  entryDate?: string;
  project?: string;
  staffName?: string;
  language?: 'en' | 'bm';
}

export const FileViewerModal: React.FC<FileViewerModalProps> = ({
  isOpen,
  onClose,
  fileName,
  fileSize = '245 KB',
  fileType = 'pdf',
  fileUrl,
  entryDate,
  project,
  staffName = 'Ahmad Razak',
  language = 'bm',
}) => {
  if (!isOpen) return null;

  const isBm = language === 'bm';
  const isImage = fileType === 'image' || fileName.match(/\.(jpg|jpeg|png|webp)$/i);

  const handleDownload = () => {
    if (fileUrl) {
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = fileName;
      a.click();
    } else {
      // Create a dummy text blob for preview download
      const content = `MEDIA PRIMA BERHAD - BORANG LEBIH MASA (PENGESAHAN ELEKTRONIK)\n\nNama Kakitangan: ${staffName}\nTarikh Syif: ${entryDate || 'Oktober 2024'}\nProjek / Tugasan: ${project || 'Operasi Media Prima'}\nNama Fail: ${fileName}\nStatus: Disahkan di bawah Akta Kerja 1955 (Seksyen 60)`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName.endsWith('.txt') ? fileName : `${fileName}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-surface-container-lowest shadow-2xl border border-outline-variant/40 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-150">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-surface-container-low border-b border-surface-container-high flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MediaPrimaLogo variant="compact" language={language} />
            <div className="border-l border-outline-variant/50 pl-3">
              <div className="flex items-center gap-2">
                <span className="font-headline font-bold text-sm text-on-surface">
                  {isBm ? 'Pratonton Borang Lebih Masa' : 'Overtime Form Preview'}
                </span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-primary/10 text-primary">
                  {fileType.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant truncate max-w-xs sm:max-w-md mt-0.5">
                {fileName} • {fileSize}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors border border-outline-variant/30"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body / Document Preview Canvas */}
        <div className="p-6 overflow-y-auto bg-surface flex flex-col items-center justify-center min-h-[300px]">
          {isImage && fileUrl ? (
            <div className="rounded-xl overflow-hidden border border-outline-variant/40 shadow-md max-h-[380px] bg-black/5 flex items-center justify-center">
              <img
                src={fileUrl}
                alt={fileName}
                className="max-h-[380px] w-auto object-contain rounded-lg"
              />
            </div>
          ) : (
            <div className="w-full max-w-lg bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-xs relative overflow-hidden">
              {/* Document Header Watermark */}
              <div className="flex items-center justify-between border-b border-surface-container-high pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#E21836] flex items-center justify-center font-black text-white text-xs">
                    mp
                  </div>
                  <div>
                    <div className="font-bold text-xs text-on-surface tracking-wider">
                      MEDIA PRIMA BERHAD
                    </div>
                    <div className="text-[10px] text-on-surface-variant">
                      BORANG PERAKUAN KERJA LEBIH MASA (LAMPIRAN BORANG)
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-[12px]">verified</span>
                    STATUS: DISAHKAN
                  </span>
                </div>
              </div>

              {/* Form Metadata Fields */}
              <div className="grid grid-cols-2 gap-3 py-4 text-xs border-b border-surface-container-high">
                <div>
                  <span className="text-outline text-[10px] uppercase font-semibold">Nama Kakitangan</span>
                  <p className="font-medium text-on-surface">{staffName}</p>
                </div>
                <div>
                  <span className="text-outline text-[10px] uppercase font-semibold">Tarikh Tuntutan</span>
                  <p className="font-medium text-on-surface">{entryDate || 'Kitaran Oktober 2024'}</p>
                </div>
                <div>
                  <span className="text-outline text-[10px] uppercase font-semibold">Aktiviti / Projek</span>
                  <p className="font-medium text-on-surface">{project || 'Tugasan Rasmi Penyiaran / IT'}</p>
                </div>
                <div>
                  <span className="text-outline text-[10px] uppercase font-semibold">Status Semakan HR</span>
                  <p className="font-medium text-secondary">Dipadankan dengan Kad Perakam Waktu</p>
                </div>
              </div>

              {/* Document Visual Representation */}
              <div className="mt-4 p-4 bg-surface-container-low rounded-lg border border-dashed border-outline-variant/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">description</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-on-surface truncate">{fileName}</div>
                  <div className="text-[11px] text-on-surface-variant">
                    {fileSize} • Dimuat naik secara rasmi bagi tujuan audit penggajian Media Prima Berhad
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-outline pt-2">
                <span>Seksyen 60 Akta Kerja 1955</span>
                <span>Audit Ref: MPB-OT-2024-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-surface-container-low border-t border-surface-container-high flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
            <span>
              {isBm
                ? 'Fail disimpan dalam storan selamat Media Prima'
                : 'File stored in secure Media Prima repository'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold transition-all flex items-center gap-1.5 border border-outline-variant/30 shadow-2xs"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>{isBm ? 'Muat Turun Fail' : 'Download File'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary-container transition-all"
            >
              {isBm ? 'Tutup' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
